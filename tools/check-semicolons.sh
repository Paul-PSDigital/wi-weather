RESULT=`grep -e '.*;$' --include \*.js\* -R {models,modules,routes,shared}  | sed 's/^/ERROR: Semicolon found: /'`
if [ "$RESULT" ]; then
  echo "$RESULT"
  exit 1
else
  exit 0
fi
