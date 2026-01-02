import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  useGetAllSectionsQuery,
  useUpdateSectionMutation,
  useDeleteSectionMutation,
  selectSectionById,
  selectAllSections,
} from "../sections/sectionsApiSlice.js";

import { FaPlusCircle, FaRegSave, FaEye, FaTimes } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";

import QuestionList from "../admin/QuestionsList.jsx";
import AddQuestion from "../admin/AddQuestion.jsx";

import "../../styles/editSection.css";

import Loader from "../ui/Loader.jsx";

const EditSection = ({ sectionId }) => {
  useGetAllSectionsQuery();

  const [originalData, setOriginalData] = useState(null);

  const [formData, setFormData] = useState({
    sectionTitle: "",
    order: "",
    theory: "",
    videoUrl: "",
  });

  const [selectedSectionId, setSelectedSectionId] = useState(null);
  const section = useSelector((state) => selectedSectionId?selectSectionById(state, selectedSectionId):null);
  const sections = useSelector(selectAllSections);
  const isSectionSelected = Boolean(formData.sectionTitle);

  const [showQuestions, setShowQuestions] = useState(false);
  const [showAddQuestion, setShowAddQuestion] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const [updateSection] = useUpdateSectionMutation();
  const [deleteSection] = useDeleteSectionMutation();

  useEffect(() => {
    if (section) {
      const data = {
        sectionTitle: section.sectionTitle,
        order: section.order,
        theory: section.theory,
        videoUrl: section.videoUrl,
      };
      setFormData(data);
      setOriginalData(data);
    }
  }, [section]);

  if (!sections.length) return <Loader />;

  const onSave = async () => {
    await updateSection({
      id: sectionId,
      ...formData,
    });
    setIsEditing(false);
  };

  const onCancel = () => {
    if (originalData) {
      setFormData(originalData);
    }
    setIsEditing(false);
  };

  const onModify = () => {
    setOriginalData(formData);
    setIsEditing(true);
  };

  const onDelete = async () => {
    await deleteSection({
      id: sectionId,
    });
  };

  return (
    <>
      <div className="edit-section__container">
        <h2>Consultar los detalles de una sección</h2>
        <label>
          Nombre de la sección:
          <select
            value={selectedSectionId??""}
            onChange={(e) =>setSelectedSectionId(e.target.value)}
          >
            <option value="">Seleccionar:</option>
            {sections.map((section) => (
              <option key={section._id} value={section._id}>
                {section.sectionTitle}
              </option>
            ))}
          </select>
        </label>
      </div>

      <section className="section-main__container">
        <div className="section-main__subcontainer">
          <h2>{formData.sectionTitle || "Sección"}</h2>

          <div className="section__inner">
            <div className="inputs-inner">
              <div className="top-inner">
                <div className="title_subcontainer">
                  <label>
                    Titulo:
                    <input
                      type="text"
                      value={formData.sectionTitle}
                      disabled={!isEditing}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          sectionTitle: e.target.value,
                        })
                      }
                    />
                  </label>
                  <label>
                    Orden:
                    <input
                      type="text"
                      value={formData.order}
                      disabled={!isEditing}
                      onChange={(e) =>
                        setFormData({ ...formData, order: e.target.value })
                      }
                    />
                  </label>
                </div>
              </div>
              <div className="bottom-inner">
                <label>
                  Teoría:
                  <textarea
                    value={formData.theory}
                    disabled={!isEditing}
                    onChange={(e) =>
                      setFormData({ ...formData, theory: e.target.value })
                    }
                  />
                </label>
                <label>
                  VideoURL:
                  <input
                    type="text"
                    value={formData.videoUrl}
                    disabled={!isEditing}
                    onChange={(e) =>
                      setFormData({ ...formData, videoUrl: e.target.value })
                    }
                  />
                </label>
              </div>
            </div>
            <div className="modify-section__buttons">
              {!isEditing && formData.sectionTitle ? (
                <button
                  className="style__button"
                  onClick={onModify}
                >
                  <FaPencil className="faIcon__style" />
                </button>
              ) : isEditing?(
                <div className="column">
                  <button className="style__button" onClick={onCancel}>
                    <FaTimes className="faIcon__style" />
                  </button>
                  <button className="style__button" onClick={onSave}>
                    <FaRegSave className="faIcon__style" />
                  </button>
                  <button className="style__button" onClick={onDelete}>
                    <AiFillDelete className="faIcon__style" />
                  </button>
                </div>
              ):null}
            </div>
          </div>

          <div className="questions__buttons">
            <button
              onClick={() => {
                setShowQuestions(true);
                setShowAddQuestion(false);
              }}
              disabled={!formData.sectionTitle}
            >
              Ver Preguntas
              <FaEye className="faIcon__style" />
            </button>

            <button
              onClick={() => {
                setShowQuestions(false);
                setShowAddQuestion(true);
              }}
              disabled={!formData.sectionTitle}
            >
              Nueva Pregunta
              <FaPlusCircle className="faIcon__style" />
            </button>
          </div>
        </div>
      </section>
      {showQuestions && (
        <QuestionList
          sectionId={selectedSectionId}
          onClose={() => setShowQuestions(false)}
        />
      )}

      {showAddQuestion && (
        <AddQuestion
          sectionId={selectedSectionId}
          onClose={() => setShowAddQuestion(false)}
        />
      )}
    </>
  );
};

export default EditSection;
