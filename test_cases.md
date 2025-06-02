## <h3 style="text-align:center;"><u> Test cases for Registration Form </h3>


|Test case scenario ID| Reg_001|
|------|--------------|
|**Test Case Description** | Validate behavior and field constraints of the registration form|
|**Pre-Requisite** | a web browser that supports JS, no active user sessions |
|**Post-condition** | Form does not submit unless all validation criteria is met |
|**Test Priotity** | High |
|**Tools used** | Microsoft Edge dev tools (simulator), google fonts, git|

<br>

| **Test Case ID** | **Feature**             | **Input**                                 | **Expected Result**                                               |
| ---------------- | ----------------------- | ----------------------------------------- | ----------------------------------------------------------------- |
| `REG_001A`       | Passwords Match         | Password: `abc@123`<br>Confirm: `abc@123` | Registration succeeds                                             |
| `REG_001B`       | Passwords Do NOT Match  | Password: `abc@123`<br>Confirm: `abc@124` | Alert: “Passwords do not match!”                                  |
| `REG_001C`       | Password Validation     | Password: `abc<>123`                      | Alert: “Password contains invalid characters…”                    |
| `REG_001D`       | Full Name Validation    | Full name: `John@Doe`                     | Alert: “Full Name can only contain letters and spaces.”           |
| `REG_001E`       | Empty Required Fields   | Leave fields blank                        | Alerts shown for each empty field                                 |
| `REG_001F`       | Email Format Validation | Email: `user@example.com`                 | Accepted                                                          |
| `REG_001G`       | Invalid Email Format    | Email: `user@@.com`                       | HTML5/browser-level error shown ("Please enter a valid email")    |
| `REG_001H`       | Gender Dropdown         | Select: none                              | Alert or validation message shown (selection required)            |
| `REG_001I`       | Sign-in Link Function   | Click: “Sign in!”                         | Link is clickable (can be stubbed for now)                        |
| `REG_001J`       | Password Empty          | Password: empty                           | Alert: “Password contains invalid characters” or “field is empty” |
| `REG_001K`       | Confirm Password Empty  | Confirm Password: empty                   | Alert: “Passwords do not match”                                   |


<br>
<br>
_Kabwe Ruth_