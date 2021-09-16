In this practice let's build an **Appointments App** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/appointments-app-output.gif" alt="appointments-app" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

#### Design Files

<details>
<summary>Click to view the Design Files</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/appointments-app-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/appointments-app-lg-output.png)

</details>

### Project Set Up Instructions

<details>
<summary>Click to view the Set Up Instructions</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Project Completion Instructions

<details>
<summary>Click to view the Functionality to be added</summary>

#### Add Functionality

The app must have the following functionalities

- Initially, the list of appointments should be empty and the title input and date input should be empty.
- When non-empty values are provided for title and date and the **Add** button is clicked,
  - A new appointment should be added to the list of appointments.
  - The value inside the input elements for title and date should be updated to their initial values.
- When the **Star** on an appointment is clicked, the appointment should be starred.
- The status of the **Starred** filter is updated by clicking on it.
- When the **Starred** filter is active, all the starred appointments should be filtered and displayed.
- When the **Starred** filter is inactive, the list of all appointments should be displayed.
</details>

<details>
<summary>Click to view the Implementation Files</summary>

- Your task is to complete the implementation of
  - `src/components/Appointments/index.js`
  - `src/components/Appointments/index.css`
  - `src/components/AppointmentItem/index.js`
  - `src/components/AppointmentItem/index.css`

</details>

<details>
<summary>Click to view the Components Structure</summary>

#### Components Structure

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/appointments-app-component-breakdown-structure.png" alt="component structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

#### Quick Tips

<details>
<summary>Click to view Quick Tips</summary>

- The HTML input element with the type `date` is designed for the user to select the date from a date picker.

```jsx
<input type="date" />
```

- The `format` function in the date-fns package can be used to get the formatted date string in the given format.

```js
import {format} from 'date-fns'

console.log(format(new Date(2021, 19, 07), 'dd MMMM yyyy, EEEE')) // '19 July 2021, Monday'
```

</details>
<br/>

> #### Important Note
>
> <details open>
> <summary>Click to view Important Note Points</summary>
>
> **The following instructions are to be followed for the tests to pass**
>
> - For the `format` function, pass the format string `dd MMMM yyyy, EEEE` as the second argument.
> - The star button in each appointment should have the testid as `star`
> - The star image in each appointment should have alt text as `star`
>
> </details>

### Resources

<details>
<summary>Image URLs</summary>

#### Images

- [https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png](https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png) alt should be **appointments**
- [https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png](https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png)
- [https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png](https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png)

</details>

<details>
<summary>Colors</summary>

#### Colors

<div style="background-color: #9796f0; width: 150px; padding: 10px; color: black">Hex: #9796f0</div>
<div style="background-color: #fbc7d4; width: 150px; padding: 10px; color: black">Hex: #fbc7d4</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #171f46; width: 150px; padding: 10px; color: black">Hex: #171f46</div>
<div style="background-color: #8b5cf6; width: 150px; padding: 10px; color: black">Hex: #8b5cf6</div>
<div style="background-color: #b5b7c4; width: 150px; padding: 10px; color: black">Hex: #b5b7c4</div>
<div style="background-color: #9897f0; width: 150px; padding: 10px; color: black">Hex: #9897f0</div>

<br/>
</details>

#### Font-families

- Roboto

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
