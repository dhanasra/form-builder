import DNumberInput from "../formComponents/DNumberInput";
import DSingleLineInput from "../formComponents/DSingleLineInput";
import { RxInput, RxSection, RxRadiobutton, RxCheckbox, RxDropdownMenu, RxCalendar, RxTimer, RxDrawingPin, RxPerson } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";
import DNameInput from "../formComponents/DNameInput";
import DEmailInput from "../formComponents/DEmailnput";
import DPhoneInput from "../formComponents/DPhoneInput";
import DDateInput from "../formComponents/DDateInput";
import DTimeInput from "../formComponents/DTimeInput";
import DDropDown from "../formComponents/DDropDown";
import DAddressInput from "../formComponents/DAddressInput";
import DRadioInput from "../formComponents/DRadioInput";
import DCheckboxInput from "../formComponents/DCheckboxInput";
import DTextArea from "../formComponents/DTextArea";

export const Components = [

    {
        id: "SingleLineInput",
        label: "Single Line",
        icon: <RxInput/>,
        component: <DSingleLineInput/>
    },
    {
        id: "MultiLineInput",
        label: "Multi Line Input",
        icon: <RxSection/>,
        component: <DTextArea/>
    },
    {
        id: "NumberInput",
        label: "Number Input",
        icon: <RxInput/>,
        component: <DNumberInput/>
    },
    {
        id: "DecimalInput",
        label: "Decimal Input",
        icon: <RxInput/>,
        component: <DNumberInput/>
    },
    {
        id: "NameInput",
        label: "Name Input",
        icon: <RxPerson/>,
        component: <DNameInput/>
    },
    {
        id: "AddressInput",
        label: "Address Input",
        icon: <RxDrawingPin/>,
        component: <DAddressInput/>
    },
    {
        id: "EmailInput",
        label: "Email Input",
        icon: <AiOutlineMail/>,
        component: <DEmailInput/>
    },
    {
        id: "PhoneInput",
        label: "Phone Input",
        icon: <RxInput/>,
        component: <DPhoneInput/>
    },
    {
        id: "DateInput",
        label: "Date Input",
        icon: <RxCalendar/>,
        component: <DDateInput/>
    },
    {
        id: "TimeInput",
        label: "Time Input",
        icon: <RxTimer/>,
        component: <DTimeInput/>
    },
    {
        id: "Dropdown",
        label: "Dropdown",
        icon: <RxDropdownMenu/>,
        component: <DDropDown/>
    },
    {
        id: "Radio",
        label: "Radio",
        icon: <RxRadiobutton/>,
        component: <DRadioInput/>
    },
    {
        id: "Checkbox",
        label: "Checkbox",
        icon: <RxCheckbox/>,
        component: <DCheckboxInput/>
    }
]