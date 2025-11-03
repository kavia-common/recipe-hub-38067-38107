#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-hub-38067-38107/recipe_app_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

