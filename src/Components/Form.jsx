import React from "react";
import "./Form.css";

function clearAllStatus(){
  document.querySelector('#emptyFirstName').classList.add("hidden")
  document.querySelector('#FirstName').classList.remove("border-red-500");

  document.querySelector('#invalidFirstName').classList.add("hidden")
  document.querySelector('#LastName').classList.remove("border-red-500");

  document.querySelector('#emptyLastName').classList.add("hidden")
  document.querySelector('#LastName').classList.remove("border-red-500");

  document.querySelector('#invalidLastName').classList.add("hidden")
  document.querySelector('#LastName').classList.remove("border-red-500");
  
  document.querySelector('#emptyEmail').classList.add("hidden")
  document.querySelector('#Email').classList.remove("border-red-500");

  document.querySelector('#invalidEmail').classList.add("hidden")
  document.querySelector('#Email').classList.remove("border-red-500");

document.querySelector('#emptyPassword').classList.add("hidden")
  document.querySelector('#Password').classList.remove("border-red-500");

document.querySelector('#invalidPassword').classList.add("hidden")
  document.querySelector('#Password').classList.remove("border-red-500");
  
document.querySelector('#emptyOption').classList.add("hidden")
  document.querySelector('#grid-state').classList.remove("border-red-500");
  
document.querySelector('#emptyGender').classList.add("hidden")
document.querySelector('#emptyCheckbox').classList.add("hidden")



document.querySelector('#FirstName').classList.remove("border-green-500");
document.querySelector('#LastName').classList.remove("border-green-500");
document.querySelector('#Email').classList.remove("border-green-500");
document.querySelector('#Password').classList.remove("border-green-500");
}




function Form({GetDataFromChild }) {
  
function submitHandler(){
  let FirstName = document.querySelector('#FirstName').value
  let LastName = document.querySelector('#LastName').value
  let Email = document.querySelector('#Email').value
  let Password = document.querySelector('#Password').value
  let optionValue = document.querySelector('#grid-state').value
  let FirstRadio = document.querySelector('#inline-radio').checked
  let SecondRadio =  document.querySelector('#inline-2-radio').checked
  let checkbox =  document.querySelector('#checkbox').checked
  clearAllStatus()

  if(  FirstName == ''){
    document.querySelector('#emptyFirstName').classList.remove("hidden")
    document.querySelector('#FirstName').classList.add("border-red-500");
   
  }else if( FirstName !== '' && FirstName.length < 4){
    document.querySelector('#invalidFirstName').classList.remove("hidden")
    document.querySelector('#FirstName').classList.add("border-red-500");

    
    
  }else if(  LastName == ''  ){
    document.querySelector('#emptyLastName').classList.remove("hidden")
    document.querySelector('#LastName').classList.add("border-red-500");
    
    document.querySelector('#FirstName').classList.add("border-green-500");
    
  }else if(  LastName !== '' && LastName.length < 6 ){
    document.querySelector('#invalidLastName').classList.remove("hidden")
    document.querySelector('#LastName').classList.add("border-red-500");

    document.querySelector('#FirstName').classList.add("border-green-500");


  }else if(  Email == ''  ){
    document.querySelector('#emptyEmail').classList.remove("hidden")
    document.querySelector('#Email').classList.add("border-red-500");

    document.querySelector('#FirstName').classList.add("border-green-500");
    document.querySelector('#LastName').classList.add("border-green-500");


  }else if(  Email !== '' && Email.length < 8 ){
    document.querySelector('#invalidEmail').classList.remove("hidden")
    document.querySelector('#Email').classList.add("border-red-500");

    document.querySelector('#FirstName').classList.add("border-green-500");
    document.querySelector('#LastName').classList.add("border-green-500");


  }else if(  Password == ''  ){
    document.querySelector('#emptyPassword').classList.remove("hidden")
    document.querySelector('#Password').classList.add("border-red-500");

    document.querySelector('#FirstName').classList.add("border-green-500");
    document.querySelector('#LastName').classList.add("border-green-500");
    document.querySelector('#Email').classList.add("border-green-500");


  }else if(  Password !== '' && Password.length < 8 ){
    document.querySelector('#invalidPassword').classList.remove("hidden")
    document.querySelector('#Password').classList.add("border-red-500");

    document.querySelector('#FirstName').classList.add("border-green-500");
    document.querySelector('#LastName').classList.add("border-green-500");
    document.querySelector('#Email').classList.add("border-green-500");

  }else if (optionValue == ''){
    document.querySelector('#emptyOption').classList.remove("hidden")
    document.querySelector('#grid-state').classList.add("border-red-500");

    
    document.querySelector('#FirstName').classList.add("border-green-500");
    document.querySelector('#LastName').classList.add("border-green-500");
    document.querySelector('#Email').classList.add("border-green-500");
    document.querySelector('#Password').classList.add("border-green-500");


  }else if (FirstRadio == false && SecondRadio   == false){
    document.querySelector('#emptyGender').classList.remove("hidden")


    document.querySelector('#FirstName').classList.add("border-green-500");
    document.querySelector('#LastName').classList.add("border-green-500");
    document.querySelector('#Email').classList.add("border-green-500");
    document.querySelector('#Password').classList.add("border-green-500");


  }else if(checkbox == false){
    document.querySelector('#emptyCheckbox').classList.remove("hidden")

  }else{
   let objOfData = {
    
    First_Name : FirstName,
  Last_Name : LastName,
  Email : Email,
  Password :Password,
  Country : optionValue ,
  Gender : FirstRadio ? 'female' : SecondRadio ? 'male' : ''
  }
    GetDataFromChild(objOfData)
    document.querySelector('#FirstName').value = ''
    document.querySelector('#LastName').value = '' 
    document.querySelector('#Email').value = ''
    document.querySelector('#Password').value = ''
    document.querySelector('#grid-state').value = ''
    document.querySelector('#inline-radio').checked = false
     document.querySelector('#inline-2-radio').checked  = false
     document.querySelector('#checkbox').checked  = false

  }
  }
  return (
    <>
     <div className="flex flex-col justify-center ">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
      <h2 className="block text-gray-700 text-sm font-bold mb-2 font-google2 mb-8 text-center"> Registration Form with List of members</h2>
    <section className="container-user-password">
    <div className=" FirstName w-full">
      <label className="block text-gray-700 text-sm font-bold mb-2 font-google" htmlFor="FirstName">
        FirstName
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-2 focus:outline-none focus:shadow-outline" id="FirstName" type="text" placeholder="FirstName"/>
      <p className="hidden text-red-500 text-xs italic mb-2" id="emptyFirstName">Please choose a FirstName.</p>
      <p className="hidden text-red-500 text-xs italic mb-2" id="invalidFirstName">FirstName must be More 4 Charachter</p>  
    </div>
    <div className=" LastName w-full">
      <label className="block text-gray-700 text-sm font-bold mb-2 font-google" htmlFor="LastName">
        LastName
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline" id="LastName" type="text" placeholder="LastName"/>
      <p className="hidden text-red-500 text-xs italic mb-2"  id="emptyLastName">Please choose a LastName.</p>
      <p className="hidden text-red-500 text-xs italic mb-2" id="invalidLastName">FirstName must be More 6 Charachter</p>  

    </div>
    </section>
    <div className="mb-4 Email w-full">
      <label className="block text-gray-700 text-sm font-bold mb-2 font-google" htmlFor="Email">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2" id="Email" type="Email" placeholder="Email"/>
      <p className="hidden text-red-500 text-xs italic mb-2" id="emptyEmail">Please choose a Email.</p>
      <p className="hidden text-red-500 text-xs italic mb-2" id="invalidEmail">Email must be More 8 Charachter</p>  
    </div>
    <div className="mb-4 Password w-full">
      <label className="block text-gray-700 text-sm font-bold mb-2 font-google" htmlFor="Password">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2" id="Password" type="Password" placeholder="**********"/>
      <p className="hidden text-red-500 text-xs italic mb-2" id="emptyPassword">Please choose a Password.</p>
      <p className="hidden text-red-500 text-xs italic mb-2" id="invalidPassword">Password must be More 6 Charachter</p>  
    </div>

    <div className="flex flex-wrap -mx-3 mb-4">
  
    <div className="w-full px-3 mb-6 md:mb-0">
      <label className="block text-gray-700 text-sm font-bold mb-2 font-google" htmlFor="grid-state">
        Country
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2" id="grid-state">
                <option value="" defaultValue>Choose Your Country</option>
                 <option option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                <option value="Moldova, Republic of">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">Virgin Islands, British</option>
                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      <p className="hidden text-red-500 text-xs italic mb-2" id="emptyOption">Please choose a Country.</p>
    </div>
    </div>

    <div className="flex items-center mb-2">
      <p className="block text-gray-700 text-sm font-bold mr-2 font-google">Gender: </p>
    <div className="flex items-center mr-4">
        <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">male</label>
    </div>
    <div className="flex items-center mr-4">
        <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">female</label>
    </div>

</div>
    <p className="hidden text-red-500 text-xs italic mb-2 " id="emptyGender">Please choose a Gender.</p>


    <div className=" mb-6">
    <div className="md:w-1/3"></div>
    <label className="md:w-2/3 block text-gray-500 font-bold mb-2">
      <input id="checkbox" className="mr-2 leading-tight" type="checkbox"/>
      <span className="text-sm font-google">
      I Accept policitiy and term
      </span>
    </label>
    <p className="hidden text-red-500 text-xs italic mb-2" id="emptyCheckbox">Please Accept policitiy and term</p>

  </div>
    <div className="flex items-center justify-between">
      <button onClick={submitHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
        Sign In
      </button>
      
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
   Writen by React & tailwindcss
  </p>
</div>
    </>
  );
}

export default Form;
