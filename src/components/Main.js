import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLogin, logIn } from '../features/counter/loginSlice';
function Main() {
   const dispatch = useDispatch();
   const isLog = useSelector(selectIsLogin);
   let onLog = React.createRef();
   const handlerLogin = () => {
      dispatch(logIn(onLog.current.value));
   };
   console.log(isLog);
   return (
      <div>
         {isLog ? (
            <div className='main'>
               <div>
                  <h2>Channels</h2>
               </div>
               <div>
                  <h2>Message</h2>
               </div>
               <div>
                  <h2>Users</h2>
               </div>
            </div>
         ) : (
            <div className='login'>
               <h2>Registration</h2>
               <input ref={onLog} type='text' name='' id='' />
               <button onClick={handlerLogin}>Login</button>
            </div>
         )}
      </div>
   );
}
export default Main;
