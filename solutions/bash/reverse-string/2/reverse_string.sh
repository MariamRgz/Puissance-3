s=${#1}
for ((i=0; i<${#1}; i++));do
    echo -n "${1:$((s-i-1)):1}"
    done
    