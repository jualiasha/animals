import React from "react";

const AnimalNew = ({ change, submit }) => {
  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={change} />
        <label htmlFor="class">Class</label>
        <select name="class" id="class" onChange={change}>
          <option value="Mammals">Mammals</option>
          <option value="Mammals">Birds</option>
          <option value="Mammals">Snakes</option>
        </select>
        <label htmlFor="img">Img url</label>
        <input type="url" name="img" id="img" onChange={change} />
        <label htmlFor="description">Description</label>
        <textarea
          name="desc"
          id="desc"
          cols="30"
          rows="10"
          onChange={change}
        ></textarea>
        <label htmlFor="more">Read more link</label>
        <input type="url" name="more" id="more" onChange={change} />
        <input type="submit" value="Add new animal" />
      </form>
    </div>
  );
};

export default AnimalNew;
