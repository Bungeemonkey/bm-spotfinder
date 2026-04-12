#!/bin/bash

INDEX_FILE="src/index.html"
cp "$INDEX_FILE" "$INDEX_FILE.bak"

if [[ "$1" == "prod" || "$1" == "production" ]]; then
    echo "Targeting Production..."
    MAPS_KEY=$(head -n 1 ./maps-api.key)
    CONFIG="production"
    FIREBASE_TARGET="hosting:prod"
else
    echo "Targeting Test..."
    MAPS_KEY=$(head -n 1 ./maps-test-api.key)
    CONFIG="test"
    FIREBASE_TARGET="hosting:test"
fi

perl -pi -e "s/%MAPS_KEY_PLACEHOLDER%/$MAPS_KEY/g" "$INDEX_FILE"
set -e
ng build --configuration="$CONFIG"
firebase deploy --only "$FIREBASE_TARGET"
set +e

mv "$INDEX_FILE.bak" "$INDEX_FILE"
