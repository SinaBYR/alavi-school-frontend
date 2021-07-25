import NavLinkOne from '../../Utility/UI/NavLinkOne/NavLinkOne';
import { BiVideo } from 'react-icons/bi';

const EDUCATIONAL_CONTENT = {
    1: (
        <>
            <NavLinkOne to="/">پیش دبستانی<span><BiVideo /></span></NavLinkOne>
            <NavLinkOne to="/">پایه اول<span><BiVideo /></span></NavLinkOne>
            <NavLinkOne to="/">پایه دوم<span><BiVideo /></span></NavLinkOne>
            <NavLinkOne to="/">پایه سوم<span><BiVideo /></span></NavLinkOne>
            <NavLinkOne to="/">پایه چهارم<span><BiVideo /></span></NavLinkOne>
            <NavLinkOne to="/">پایه پنجم<span><BiVideo /></span></NavLinkOne>
            <NavLinkOne to="/">پایه ششم<span><BiVideo /></span></NavLinkOne>
        </>
    ),
    2: (
        <>
            <NavLinkOne to="/">پیش دبستانی<span><BiVideo /></span></NavLinkOne>
            <NavLinkOne to="/">پایه اول<span><BiVideo /></span></NavLinkOne>
            <NavLinkOne to="/">پایه دوم<span><BiVideo /></span></NavLinkOne>
            <NavLinkOne to="/">پایه سوم<span><BiVideo /></span></NavLinkOne>
            <NavLinkOne to="/">پایه چهارم<span><BiVideo /></span></NavLinkOne>
            <NavLinkOne to="/">پایه پنجم<span><BiVideo /></span></NavLinkOne>
            <NavLinkOne to="/">پایه ششم<span><BiVideo /></span></NavLinkOne>
        </>
    ),
    3: (
        <>
            <NavLinkOne to="/">پایه هفتم<span><BiVideo /></span></NavLinkOne>
            <NavLinkOne to="/">پایه هشتم<span><BiVideo /></span></NavLinkOne>
            <NavLinkOne to="/">پایه نهم<span><BiVideo /></span></NavLinkOne>
        </>
    )
}


const EducationalContentDropdownItems = () => {
    const educationalContentList = EDUCATIONAL_CONTENT[window.location.search.slice(-1)];

    return (
        <>
            {educationalContentList}
        </>
    )
}

export default EducationalContentDropdownItems;