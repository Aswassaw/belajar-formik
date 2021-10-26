import React from "react";

const YoutubeForm = () => {
  return (
      <form className="form">
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' id='name' />

        <label htmlFor='email'>Email</label>
        <input type='email' email='email' id='email' />

        <label htmlFor='channel'>Channel</label>
        <input type='text' channel='channel' id='channel' />

        <button type="submit">Submit</button>
      </form>
  );
};

export default YoutubeForm;
