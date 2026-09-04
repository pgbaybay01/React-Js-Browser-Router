import { useRef, useState } from 'react';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  CheckIcon,
  AlertCircleIcon,
} from '../components/Icons';
import './Contact.css';

const details = [
  {
    label: 'Address',
    value: '123 Web Dev Street, React City, RC 12345',
    Icon: MapPinIcon,
  },
  { label: 'Phone', value: '+1 (555) 123-4567', Icon: PhoneIcon },
  { label: 'Email', value: 'hello@northbound.studio', Icon: MailIcon },
];

const EMPTY = { name: '', email: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  }
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.message.trim()) {
    errors.message = 'Please tell us what you need.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'A little more detail, please — at least 10 characters.';
  }
  return errors;
}

const Contact = () => {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear an error as soon as the field is corrected, but never introduce
    // one mid-keystroke.
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = validate({ ...values, [name]: value });
      if (next[name]) return prev;
      const { [name]: _removed, ...rest } = prev;
      return rest;
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const fieldError = validate(values)[name];
    setErrors((prev) => {
      if (fieldError) return { ...prev, [name]: fieldError };
      const { [name]: _removed, ...rest } = prev;
      return rest;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      formRef.current?.elements[firstInvalid]?.focus();
      return;
    }

    setStatus('sending');
    // No backend — this stands in for the request.
    window.setTimeout(() => {
      setStatus('sent');
      setValues(EMPTY);
    }, 700);
  };

  const fieldProps = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    className: errors[name] ? 'field-input has-error' : 'field-input',
  });

  return (
    <div className="page container">
      <header className="page-header">
        <span className="eyebrow">Contact</span>
        <h1>Get in touch</h1>
        <p className="lead">
          Tell us about your project and we&rsquo;ll get back to you within two
          working days.
        </p>
      </header>

      <div className="contact-layout">
        <section className="contact-info" aria-labelledby="contact-info-title">
          <h2 id="contact-info-title">Contact information</h2>
          <ul className="contact-list">
            {details.map((detail) => (
              <li key={detail.label} className="contact-item">
                <span className="card-icon">
                  <detail.Icon size={18} />
                </span>
                <div>
                  <h3>{detail.label}</h3>
                  <p>{detail.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="contact-form-panel" aria-labelledby="form-title">
          <h2 id="form-title">Send a message</h2>

          {status === 'sent' ? (
            <div className="form-success" role="status" aria-live="polite">
              <span className="card-icon success">
                <CheckIcon />
              </span>
              <div>
                <h3>Message sent</h3>
                <p>Thanks — we&rsquo;ll be in touch shortly.</p>
              </div>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => setStatus('idle')}
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input type="text" autoComplete="name" {...fieldProps('name')} />
                {errors.name && (
                  <p className="field-error" id="name-error">
                    <AlertCircleIcon size={15} />
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="email">Your email</label>
                <input
                  type="email"
                  autoComplete="email"
                  {...fieldProps('email')}
                />
                {errors.email && (
                  <p className="field-error" id="email-error">
                    <AlertCircleIcon size={15} />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea rows="5" {...fieldProps('message')} />
                {errors.message && (
                  <p className="field-error" id="message-error">
                    <AlertCircleIcon size={15} />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn--primary"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
};

export default Contact;
