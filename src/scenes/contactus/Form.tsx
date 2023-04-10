import { useForm } from 'react-hook-form'

const Form = () => {
  const inputStyle =
    'w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5'
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm()

  const onSubmit = async (e: any) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }

  return (
    <form
      method='POST'
      target='_blank'
      onSubmit={onSubmit}
      action='http://formsubmit.co/ty_inf@outlook.com'
    >
      <input
        className={inputStyle}
        type='text'
        placeholder='NAME'
        {...register('name', {
          required: true,
          maxLength: 100,
        })}
      />
      {errors.name && (
        <p className='mt-1 text-primary-500'>
          {errors.name.type === 'required' && 'This field is required.'}
          {errors.name.type === 'maxLength' && 'Max length is 100 characters'}
        </p>
      )}
      <input
        className={inputStyle}
        type='email'
        placeholder='EMAIL'
        {...register('email', {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9. -]+\.[A-Z]{2,}$/i,
        })}
      />
      {errors.email && (
        <p className='mt-1 text-primary-500'>
          {errors.email.type === 'required' && 'This field is required.'}
          {errors.email.type === 'pattern' && 'invalid email address'}
        </p>
      )}
      <textarea
        className={inputStyle}
        rows={4}
        cols={50}
        placeholder='MESSAGE'
        {...register('message', {
          required: true,
          maxLength: 2000,
        })}
      />
      {errors.message && (
        <p className='mt-1 text-primary-500'>
          {errors.message.type === 'required' && 'This field is required.'}
          {errors.message.type === 'maxLength' &&
            'Max length is 2000 characters'}
        </p>
      )}
      <button
        className='hover: mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
        type='submit'
      >
        SUBMIT
      </button>
    </form>
  )
}
export default Form
