# incubyte-test

To start the application

node add.mjs

---

add("");
Returns the output 0 since it does not have any numbers

add("1");
Returns 1

add("1,5");
Returns 6 since 1+5 = 6

add("1\n2,3");
Returns 6 since \n is considered as sum and the sum of 1+2+3 = 6

add("//;\n1;2");
Returns 3 since ; is considered as sum and the sum of 1+2 = 3

add("1,-2,3,-4");
Throws error that negative numbers not allowed
