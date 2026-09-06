if [[ $# -eq 0 ]]; then
    echo "One for you, one for me."
else
    echo -n "One for "
    echo -n "$1"
    echo -n ", one for me."
fi