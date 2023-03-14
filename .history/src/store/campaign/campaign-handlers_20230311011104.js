import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import {
  requestAddCampaign,
  requestDeleteCampaign,
  requestGetCampaign,
} from "./campaign-requests";
import { setCampaign } from "./campaign-slice";
import Swal from "sweetalert2";

function* handleAddCampaign({ payload }) {
  try {
    const response = yield call(requestAddCampaign, payload);
    if (response.status === 201) {
      toast.success("add new campaign success");
    }
  } catch (error) {
    toast.error("don't add new campaign");
  }
}

function* handleGetCampaign() {
  try {
    const response = yield call(requestGetCampaign);
    const { data } = response;
    yield put(setCampaign(data));
  } catch (error) {
    console.log(error);
  }
}

function* handleDeleteCampaign({ payload }) {
  
  try {
     Swal.fire({
       title: "Are you sure?",
       text: "You won't be able to revert this!",
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Yes, delete it!",
     }).then(async (result) => {
       if (result.isConfirmed) {
         yield call(requestDeleteCampaign, payload)
         Swal.fire("Deleted!", "Your post has been deleted.", "success")
       } else {
         Swal.fire("Failed!", "You have no right to delete post", "warning");
       }
     });
   
  } catch (error) {
    console.log(error);
  }
}

export { handleAddCampaign, handleGetCampaign, handleDeleteCampaign };
