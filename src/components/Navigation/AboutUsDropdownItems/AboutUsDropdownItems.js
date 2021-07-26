import NavLinkOne from '../../Utility/UI/NavLinkOne/NavLinkOne';



const AboutUsDropdownItems = props => {

    return (
        <>
            {/* {educationalContentList} */}
            <NavLinkOne to="/">اهداف</NavLinkOne>
            <NavLinkOne to="/">امکانات</NavLinkOne>
            <NavLinkOne to="/">افتخارات</NavLinkOne>
            <NavLinkOne to="/">کادر آموزشی</NavLinkOne>
            <NavLinkOne to="/">کادر اجرایی</NavLinkOne>
            <NavLinkOne to="/">آلبوم تصاویر</NavLinkOne>
            <NavLinkOne to="/">تاریخچه</NavLinkOne>
            {/* <NavLinkOne to="/">چشم انداز</NavLinkOne>
            <NavLinkOne to="/">رسالت</NavLinkOne>
            <NavLinkOne to="/">منشور اخلاقی</NavLinkOne> */}
        </>
    )
}

export default AboutUsDropdownItems;