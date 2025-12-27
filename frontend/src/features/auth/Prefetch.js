import { store } from '../../app/store'
import { usersApiSlice } from '../users/usersApiSlice';
import { questionsApiSlice } from '../questions/questionsApiSlice';
import { sectionsApiSlice } from '../sections/sectionsApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {
    useEffect(() => {
        console.log('subscribing')
        const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())
        const questions = store.dispatch(questionsApiSlice.endpoints.getQuestions.initiate())
        const sections = store.dispatch(sectionsApiSlice.endpoints.getSections.initiate())

        return () => {
            console.log('unsubscribing')
            users.unsubscribe()
            questions.unsubscribe()
            sections.unsubscribe()
        }
    }, [])

    return <Outlet />
}
export default Prefetch