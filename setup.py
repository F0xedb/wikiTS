from distutils.core import setup

setup(
    name="wikigen",
    version="0.0.1",
    description="generation Tool For WikiTS",
    author="Meyers Tom",
    author_email="tom@odex.be",
    url="",
    packages=["generator", "generator.helper"],
    install_requires=["PyYAML",],
)

