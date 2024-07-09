DIR_NAME=$(basename $(dirname $(pwd)));
OUTPUT_DIR=$(dirname $(dirname $(dirname $(pwd))))/dist/$DIR_NAME
if [ ! -d $OUTPUT_DIR ]; then
  mkdir -p $OUTPUT_DIR
fi
echo "Cleaning $OUTPUT_DIR"
rm -rf $OUTPUT_DIR
echo "Building $DIR_NAME to $OUTPUT_DIR"
slidev build --base /$DIR_NAME/ --out $OUTPUT_DIR
