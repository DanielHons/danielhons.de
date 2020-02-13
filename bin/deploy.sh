#!/usr/bin/env bash
hugo --gc --minify
aws s3 sync docs s3://danielhons.de --profile danielhons
aws cloudfront create-invalidation \
    --distribution-id EL5AP9F104CWZ \
    --paths "/*" \
    --profile danielhons