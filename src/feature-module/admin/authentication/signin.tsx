import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import supabase from '../../../supabaseClient';

const AdminSignin = () => {
  const [phone, setPhone] = useState('9478632129');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'PHONE' | 'OTP'>('PHONE');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const fullPhone = phone.startsWith('+') ? phone : `+91${phone}`;
  // Auto redirect if session already exists
  useEffect(() => {
    //console.log("ok");
    (async () => {
      //console.log("test");
      const { data: { session } } = await supabase.auth.getSession();
      console.log(session);
      if (session) navigate('/dashboard');
    })();
  }, [navigate]);

  const handleSendOtp = async () => {
    setErrorMsg('');
    if (!phone) {
      setErrorMsg('Phone number is required.');
      return;
    }
    try {
      const { error } = await supabase.auth.signInWithOtp({ phone: fullPhone });
      if (error) throw error;
      setStep('OTP');
    } catch (err: any) {
      setErrorMsg('Failed to send OTP: ' + err.message);
    }
  };

  const handleVerifyOtp = async () => {
    setErrorMsg('');

    if (!otp) {
      setErrorMsg('Please enter the OTP sent to your phone.');
      return;
    }

    try {
      const { data, error } = await supabase.auth.verifyOtp({
        phone: fullPhone, // "+91..." if user typed 10 digits
        token: otp,
        type: 'sms',
      });

      if (error || !data?.session) {
        throw error || new Error('Session not established');
      }

      const session = data.session;
      const supabaseUserId = session.user.id;
      const rawPhone = session?.user?.phone || ''; // "+911234567890"
      const phone = rawPhone.startsWith('91') ? rawPhone.slice(2) : rawPhone;
      // const phone = session.user.phone; // E.164 format e.g. "+91..."
      //console.log(session,phone);
      // 🔹 Link user_id in rd_users if not already set
      console.log(phone);
      const { data: existingUser, error: fetchErr } = await supabase
        .from('rd_users')
        .select('id, user_id')
        .eq('mobile', phone)
        .limit(1)
        .single();
        console.log(existingUser);
      if (fetchErr) {
        console.error('Error fetching user:', fetchErr);
      } else if (existingUser && !existingUser.user_id) {
        const { data: update,error: updateErr } = await supabase
          .from('rd_users')
          .update({ user_id: supabaseUserId })
          .eq('id', existingUser.id);
console.log(update);
        if (updateErr) {
          console.error('Error updating user_id:', updateErr);
        }
      }

      // ✅ Redirect after linking
       window.location.href = '/';

    } catch (err: any) {
      setErrorMsg('Invalid OTP: ' + (err?.message || 'Unknown error'));
    }
  };



  return (
    <div className="login-pages">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="login-logo">
              <ImageWithBasePath src="assets/admin/img/logo-login.png" alt="img" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="login-images">
              <ImageWithBasePath src="assets/admin/img/login-banner.png" alt="img" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="login-content">
              <div className="login-contenthead">
                <h5>Login</h5>
                <h6>Login with your phone number and OTP</h6>
              </div>
              {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
              <div className="login-input">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="9478632129"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                {step === 'OTP' && (
                  <div className="form-group">
                    <label>Enter OTP</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="123456"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                )}
              </div>

              <div className="login-button">
                {step === 'PHONE' ? (
                  <button className="btn btn-login" onClick={handleSendOtp}>
                    Send OTP
                  </button>
                ) : (
                  <button className="btn btn-login" onClick={handleVerifyOtp}>
                    Verify OTP
                  </button>
                )}
              </div>

              <div className="signinform text-center">
                <h4>
                  Don&apos;t have an account?{' '}
                  <Link to="/signup" className="hover-a">Sign Up</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignin;
