#!/usr/bin/env bash
hugo --gc --minify
aws s3 sync docs s3://danielhons.de --profile danielhons