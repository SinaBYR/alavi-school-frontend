import NavLinkOne from '../../Utility/UI/NavLinkOne/NavLinkOne';



const AboutUsDropdownItems = props => {

    return (
        <>
            {/* {educationalContentList} */}
            <NavLinkOne to="/">اهداف</NavLinkOne>
            <NavLinkOne to="/">امکانات</NavLinkOne>
            <NavLinkOne to="/">افتخارات</NavLinkOne>
            <NavLinkOne to="/school/staff/academic">کادر آموزشی</NavLinkOne>
            <NavLinkOne to="/school/staff/administrative">کادر اداری</NavLinkOne>
            <NavLinkOne to="/school/gallery">آلبوم تصاویر</NavLinkOne>
            <NavLinkOne to="/">تاریخچه</NavLinkOne>
            {/* <NavLinkOne to="/">چشم انداز</NavLinkOne>
            <NavLinkOne to="/">رسالت</NavLinkOne>
            <NavLinkOne to="/">منشور اخلاقی</NavLinkOne> */}
        </>
    )
}

export default AboutUsDropdownItems;