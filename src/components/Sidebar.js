const Sidebar = () => {
  return (
    <>
    <div className="right-sidebar flex w-[365px]">
       <div className="bg-white p-5 rounded-custom shadow-custom-1">
        <div class="relative mb-3"
            data-te-datepicker-init
            data-te-input-wrapper-init>
            <label for="datepicker"class="mb-2 inline-block text-neutral-700 dark:text-neutral-200">Select Pick Up Date</label>
            <input
              type="text"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Select a date" data-te-datepicker-toggle-ref  data-te-datepicker-toggle-button-ref/>
          </div>
       </div>
      </div>
    </>
  );
}

export default Sidebar;




