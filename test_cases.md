## <h3 style="text-align:center;"><u> Test cases for Registration Form </h3>


|Test case scenario ID| Reg_001|
|------|--------------|
|**Test Case Description** | Registration form for a website|
|**Pre-Requisite** | Either a valid user account (sign in) or a valid email to create an account. |
|**Test case ID** | Reg_001A |
|**Test Priotity** | |
|**Post-Requisite** | none|

<br>

| Feature | Test cases |
|------|--------------|
| **Passwords match** | - Only characters that are allowed are “!@#$%^&*()_+=-“|
| **Full name** | - Field does not allow any special characters. |
| **No empty fields are registered** | - Error message appears when an account is attemmpted to be made if empty fields are entered |
| **Email** | - Allows for emails to be entered <br> -Empty fields are not allowed  |
| **Confirm password** | - Requires the exact same characters |
| **Sign-in button** | -Link is responsive (Does not lead to anything for basic validation) |
| **Gender drop down selection** | - Options: male and female <br> -Selection is required <br> -"Select Gender" is not an option, leads to an error if user tries to sign up  |



<br>

* **Passwords do not match**

```
Password:          password1
Confirm Password:  password12
Expected result:   Alert: passwords do not match!
```
<br>

* **Invalid character + Empty password error**

```
Password                (empty)
Confirmed Password      (empty)
Expected result         Error: field is empty

```


- _Kabwe Ruth_