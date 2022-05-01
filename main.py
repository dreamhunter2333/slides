import click
import logging
from apng import APNG


_logger = logging.Logger(__name__)
_logger.setLevel(logging.DEBUG)
ch = logging.StreamHandler()
ch.setLevel(logging.DEBUG)
formatter = logging.Formatter(
    '%(asctime)s - %(name)s - %(levelname)s - %(message)s')
ch.setFormatter(formatter)
_logger.addHandler(ch)


@click.command()
@click.option('--input', '-i', 'input_file', required=True, type=str)
def main(input_file):
    im = APNG.open(input_file)
    for i, (png, _) in enumerate(im.frames):
        png.save(f"{input_file}-{i}.png")

main()
