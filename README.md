html-replace
============

Javascript to replace occurrences of text on a page from URL parameters.

h1. Overview

If this script is included you can replace any text in the html body with replacement text.

h2. Usage

The script introduces a new parameter to the request called 'replace'. The value of the parameter is the text to find and the text to replace separated by a colon.

	replace=[text_to_find]:[text_to_replace]

A page with the following url:
	http://domain.com/page1.html
|================================|
|                                |
|   Call us!                     |
|      555-555-5555              |
|                                |
|                                |
|                                |
|================================|

Can be replaced with this url:
	http://domain.com/page1.html?replace=555-555-5555:666-666-6666
|================================|
|                                |
|   Call us!                     |
|      666-666-6666              |
|                                |
|                                |
|                                |
|================================|


The reason for doing this is so that organic traffic will go to the first example and call the original phone number. In online advertising we can supply the link with the replace parameter so that any potential client clicking on the ad will see the new number and call that. This allows a business that relies on calls to track where most of their clients are coming from.



h1. Building
I didn't want to write a whole grunt build script for such a simple thing so I just made a script that gets YUI Compressor and runs it against any js files in the src folder. It will output the file minified with -min appended.

Ensure that java and wget are available on your path.
Run the build.sh script in bin and your files will be minified using YUI Compressor. If you do not have compressor the script will fetch it for you.

