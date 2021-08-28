import { NavLinkOne } from '../../Utility/UI';
import { BiVideo } from 'react-icons/bi';

const EducationalContentDropdownItems = props => {

    const EDUCATIONAL_CONTENT = {
        1: (
            <>
                <NavLinkOne to="/">پیش دبستانی<span><BiVideo /></span></NavLinkOne>
                <NavLinkOne to="/school/lessons/1">پایه اول<span><BiVideo /></span></NavLinkOne>
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
                <NavLinkOne to="/school/lessons/1">پایه اول<span><BiVideo /></span></NavLinkOne>
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

    const educationalContentList = EDUCATIONAL_CONTENT[window.location.search.slice(-1)];
    const schoolBranch = localStorage.getItem('branch');

    return (
        <>
            {EDUCATIONAL_CONTENT[schoolBranch]}
        </>
    )
}

export default EducationalContentDropdownItems;