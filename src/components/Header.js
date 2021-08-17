import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
   selectIsLogin,
   selectUserName,
   logOut,
} from '../features/counter/loginSlice';
function Header() {
   const dispatch = useDispatch();
   const isLog = useSelector(selectIsLogin);
   const user = useSelector(selectUserName);
   const handlerLogout = () => {
      dispatch(logOut());
   };
   console.log(user);
   return (
      <header>
         {isLog ? (
            <div className='header-top'>
               <p>{user}</p>
               <p>
                  <button onClick={handlerLogout}>Logout</button>
               </p>
            </div>
         ) : (
            <div className='header-top'>
               <p>Login</p>
               <p>{user}</p>
            </div>
         )}
      </header>
   );
}
export default Header;
