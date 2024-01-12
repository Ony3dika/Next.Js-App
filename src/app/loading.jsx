const Loading = () => {
  return (
    <div className='h-screen w-screen noise fixed top-0 left-0 z-50 bg-background flex justify-center items-center text-copy-light'>
      <div className='chaos animate-pulse h-96 w-96 flex items-end justify-center'>
        {" "}
        <p className='text-3xl font-bold uppercase'>loading...</p>
      </div>
    </div>
  );
};

export default Loading;
