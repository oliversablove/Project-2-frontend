# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh

curl "https://young-lake-86313.herokuapp.com/sign-out" \
  --include \
  --header "Authorization: Token token=${TOKEN}" \
  --request DELETE \

echo
