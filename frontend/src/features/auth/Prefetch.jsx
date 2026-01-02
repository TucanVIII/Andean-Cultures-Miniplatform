import { store } from '../../app/store'
import { usersApiSlice } from '../users/usersApiSlice';
import { sectionsApiSlice } from '../sections/sectionsApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {
    useEffect(() => {
        store.dispatch(sectionsApiSlice.util.prefetch("getAllSections", "sectionsList", { force:true}))
    }, [])

    return <Outlet />
}
export default Prefetch