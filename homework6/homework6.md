1. Negative Matcher.

Custom matchers will have their pass value negated when using 'not'. Custom matchers can have a negative compare attribute to explicitly handle cases where their negation is desired.

2. toBeDefined, toBeUndefined

These two matchers are used to check whether any variable in the code is predefined or not.
ToBeUndefined matcher helps to check whether any variable is previously undefined or not, basically it works simply opposite to the toBeDefined. 

3. toBeNull

As the name signifies this matcher helps to check null values.

4.toContain

toContain will work on both arrays and strings. It will essentially be the same using Array#includes or String#includes - the array or string will be checked if it has an item (for arrays) or a subsequence (for strings) that matches the argument.

5. toBeNaN

Like toBeNull, toBeNaN checks if something is NaN:

6. toThrow, toThrowError

These two matchers are used to check whether JavaScript throws error objects.

7. toMatch

toMatch checks if something is matched, given a regular expression. It can be passed as a regular expression or a string, which is then parsed as a regular expression.

8. Match anything

Matching Anything with jasmine.any
jasmine.any takes a constructor or "class" name as an expected value. It returns true if the constructor matches the constructor of the actual value.