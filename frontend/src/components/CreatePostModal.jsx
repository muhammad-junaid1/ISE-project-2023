import { useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import Button from "./Button.component";
import Post from "./Post.component";
import { useStateContext } from "../context/provider";
import axios from "axios";
import BtnLoadingSpinner from "./BtnLoadingSpinner";
import { toast } from "react-toastify";

const CreatePostModal = ({ showCreatePostModal, closeCreatePostModal }) => {
  const [values, setValues] = useState({
    type: "",
    location: "",
    gender: "",
    age: "",
    bloodGroup: "",
  });
  const [preview, setPreview] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const { User, BACKEND_URL } = useStateContext();

  const setInputValue = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (!preview) {
        handleClickPreview();
      }

      if (preview) {
        setBtnLoading(true);
        const data = { ...values, user: User.email };
        await axios.post(`${BACKEND_URL}/posts`, data);
        closeCreatePostModal();
        setBtnLoading(false);
        toast.success("Post Created Successfuly!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          document.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      setBtnLoading(false);
    }
  };

  const handleClickPreview = () => {
    setPreview(true);
  };

  const handleClosePreview = () => {
    setPreview(false);
  };

  return (
    <>
      <Rodal
        width={440}
        customStyles={{ padding: 15, borderRadius: 8 }}
        height={380}
        customMaskStyles={{ background: "rgba(0, 0, 0, 0.85)" }}
        animation="slideDown"
        visible={showCreatePostModal}
        onClose={closeCreatePostModal}
      >
        <div className="create-post-modal">
          <h3>
            <strong>Create Post</strong>
          </h3>
          <div className="form" style={{ marginTop: 8 }}>
            <form action="" onSubmit={handleSubmit}>
              {preview ? (
                <div style={{ marginTop: 25 }}>
                  <Post fullWidth data={{ ...values, user: User.email }} />
                </div>
              ) : (
                <div>
                  <div className="field input-field">
                    <input
                      type="text"
                      name="location"
                      value={values.location}
                      onInput={setInputValue}
                      required
                      placeholder="Location"
                    />
                  </div>
                  <div className="field input-field">
                    <input
                      type="number"
                      name="age"
                      value={values.age}
                      onInput={setInputValue}
                      required
                      placeholder="Age"
                    />
                  </div>
                  <div className="field input-field">
                    <select
                      value={values.type}
                      name="type"
                      onInput={setInputValue}
                      required
                    >
                      <option disabled value="">
                        Are you donating or receiving?
                      </option>
                      <option value="donor">Donating</option>
                      <option value="recipient">Receiving</option>
                    </select>
                  </div>
                  <div className="field input-field">
                    <select
                      value={values.gender}
                      name="gender"
                      onInput={setInputValue}
                      required
                    >
                      <option disabled value="">
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="field input-field">
                    <select
                      value={values.bloodGroup}
                      name="bloodGroup"
                      onInput={setInputValue}
                      required
                    >
                      <option disabled value="">
                        Select Blood Group
                      </option>
                      <option value="a+">A positive</option>
                      <option value="a-">A negative</option>
                      <option value="b+">B positive</option>
                      <option value="b-">B negative</option>
                      <option value="ab+">AB positive</option>
                      <option value="ab-">AB negative</option>
                      <option value="o+">O positive</option>
                      <option value="o-">O negative</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="modal-footer">
                {preview && (
                  <Button
                    onClick={handleClosePreview}
                    style={{ color: "red" }}
                    type="secondary"
                  >
                    Edit
                  </Button>
                )}
                <Button
                  style={{ background: preview ? "#5297e1" : "gray" }}
                  type="primary"
                  fullWidth
                >
                  {btnLoading ? (
                    <BtnLoadingSpinner />
                  ) : (
                    [preview ? "Done" : "Preview"]
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Rodal>
    </>
  );
};

export default CreatePostModal;
