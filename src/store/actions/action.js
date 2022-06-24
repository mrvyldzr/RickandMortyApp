export const sendEpisodePart = (episodePart) => {
  {console.log("------------------------------")}
  {console.log(episodePart)}
    if (episodePart !== null) {
      return (dispatch) => {
        dispatch({
          type: "EPISODE_PART_NAME",
          payload: episodePart,
         
        });
      };
    } else {
      return (dispatch) => {
        dispatch({
          type: "EPISODE_PART_NAME",
          payload: null,
        });
      };
    }
  };