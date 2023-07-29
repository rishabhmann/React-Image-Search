import axios from "axios";

const URL = "https://api.unsplash.com/search/photos";

const searchImages = async (term) => {
  const response = await axios.get(URL, {
    headers: {
      Authorization: "Client-ID XtF4SPRBx2LvZAYwMqd_vbCYoGNT4v8JSNDAnG7sohs"
    },
    params: {
      query: term
    }
  });

  return response.data.results;
};

export default searchImages;
