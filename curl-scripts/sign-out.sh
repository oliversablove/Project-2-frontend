# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh

curl "http://localhost:4741/sign-out" \
  --include \
  --header "Authorization: Token token=${TOKEN}" \
  --request DELETE \

echo
