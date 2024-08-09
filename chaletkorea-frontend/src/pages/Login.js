import React, { useState } from 'react';
import './Login.css';
import image from '../assets/loginImg.png';
// const Login = () => {
//   return (
//     <div>
//       <h1>Login Page</h1>
//       <p>Please login to continue.</p>
//       <h1>Login Page</h1>
//     </div>
//   );
// };
const Login = () => {
    const [email, setEmail] = useState(''); // email 사용
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        
        // 백엔드로 로그인 요청
        const response = await fetch('/api/login', { // 수정된 엔드포인트
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }), // email과 password 전달
        });

        if (response.ok) {
            const result = await response.json();
            alert(result.message); // 백엔드에서 온 메시지를 alert로 표시
            console.log(result);
            // 로그인 성공 시 추가 작업 (예: 토큰 저장, 페이지 이동 등)
        } else {
            const errorResult = await response.json();
            alert(errorResult.message || 'Login failed'); // 실패 메시지 표시
            console.error('Login failed');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="left">
                    <h1>샬레코리아</h1>
                    <p>여행을 DESIGN하다.</p>
                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            <label htmlFor="email">이메일</label> {/* email 사용 */}
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">비밀번호</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <a href="/forgot-password" className="forgot-password">
                            비밀번호를 잊으셨나요?
                        </a>
                        <button type="submit" className="login-button">
                            로그인
                        </button>
                    </form>
                </div>
                <div className="right">
                    <img src={image} alt="Chalet Korea" />
                </div>
            </div>
        </div>
    );
};

export default Login;



// const Login = () => {
//     return (
//         <div className="login-container">
//             <div className="login-box">
//                 <div className="left">
//                     <h1>샬레코리아</h1>
//                     <p>여행을 DESIGN하다.</p>
//                     <form>
//                         <div className="input-group">
//                             <label htmlFor="username">아이디</label>
//                             <input type="text" id="username" name="username" />
//                         </div>
//                         <div className="input-group">
//                             <label htmlFor="password">비밀번호</label>
//                             <input type="password" id="password" name="password" />
//                         </div>
//                         <a href="/forgot-password" className="forgot-password">비밀번호를 잊으셨나요?</a>
//                         <button type="submit" className="login-button">로그인</button>
//                     </form>
//                 </div>
//                 <div className="right">
//                     <img src={image} alt="Chalet Korea" />
//                 </div>
//             </div>
//         </div>
//     );
// };
