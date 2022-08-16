#!/bin/sh

BIN=$(dirname "$(echo "$0" | grep -E "^/" -q && echo "$0" || echo "$PWD/${0#./}")")
IMAGE="cicd/node:16"
IMAGE_NAME="karlo-cicd"

cd "$BIN" || exit 1

git pull || exit 1

HAS=$(podman image ls --filter=reference="$IMAGE" -q) || exit 1
if [ -z "$HAS" ]; then
  podman build -f "${BIN}/Dockerfile" -t $IMAGE "$BIN" || exit 1
fi

ID=$(podman ps --filter name="$IMAGE_NAME" -q)
[ -n "$ID" ] && podman stop "$IMAGE_NAME"

podman system prune --force --volumes

podman run -d --rm \
  --name "$IMAGE_NAME" \
  -w /app \
  -v "${BIN}/pipeline.sh:/app/pipeline.sh:rw" \
  -v "${HOME}:${HOME}:ro" \
  "$IMAGE" sh /app/pipeline.sh
