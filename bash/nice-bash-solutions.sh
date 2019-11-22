set -ex

which jq
elementsLength=$(cat "$file" | jq ".[${eachTC}].elements|length")

if [ "$(cat "$file" | jq ".[${eachTC}] | .elements[${eachElement}].steps[]" | grep "\"status\"" | sed 's/skipped/failed/g' | grep -o failed | sort -u)" == "failed" ];then
   failCounter=$((failCounter+1))
else 
   passedCounter=$((passedCounter+1))
fi

# Check unset
if [ -z "${SCENARIO_PASS_THRESHOLD}" ]
then 
  echo "PASS_THRESHOLD unset"
  exit 1;
fi 

# Check zero
if [ "$totalTC"  -eq "0" ] ; then
  echo "No Test Results found. Failed!" 
  exit 1
fi
# Check zero
if [ "$totalTC"  -eq "0" ] ; then
  # To avoid the 0/0=NaN
  echo "No Test Result json files found (2). Failed!"
  exit 1
fi
# Check inequality
if [ "${passedPer}" -lt "${SCENARIO_PASS_THRESHOLD}" ];then
else
fi

# For loop
for eachTC in $(seq 0 $((totalTC-1)))
do
done

dividing
passedPer=$(echo $passedCounter $totalCounter | awk '{printf "%.f \n", $1/$2*100}')
