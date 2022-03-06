# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in achat/__init__.py
from achat import __version__ as version

setup(
	name="achat",
	version=version,
	description="Aplication pour les achats de BAG",
	author="AYAT Hicham",
	author_email="hichamayat87@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
