import React, { useState, useContext } from "react";
import { RoutineContext } from "../context/RoutineContext";
import { toast } from "react-toastify";

const RoutineBuilder = () => {
  const [routineName, setRoutineName] = useState("");
  const [duration, setDuration] = useState("");
  const [milestones, setMilestones] = useState([]);
  const [steps, setSteps] = useState([]);

  const { addRoutine } = useContext(RoutineContext);

  const addMilestone = () => {
    setMilestones([...milestones, ""]);
  };

  const updateMilestone = (index, value) => {
    const updatedMilestones = [...milestones];
    updatedMilestones[index] = value;
    setMilestones(updatedMilestones);
  };

  const addStep = () => {
    setSteps([...steps, { description: "", product: "", tip: "" }]);
  };

  const updateStep = (index, field, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index][field] = value;
    setSteps(updatedSteps);
  };

  const saveRoutine = () => {
    if (!routineName || !duration) {
      toast.warn("Please fill in all required fields.");
      return;
    }

    const routine = {
      name: routineName,
      duration,
      milestones,
      steps,
    };

    addRoutine(routine);
    toast.success("Routine saved successfully!");

    // Reset form
    setRoutineName("");
    setDuration("");
    setMilestones([]);
    setSteps([]);
  };

  return (
    <div className="p-6 my-4 max-w-4xl mx-auto bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
        Build Your Routine
      </h1>
      
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-800 mb-2">
          Routine Name:
        </label>
        <select
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-white"
          value={routineName}
          onChange={(e) => setRoutineName(e.target.value)}
        >
          <option value="" disabled>
            Choose a routine...
          </option>
          <option value="Hair Care Routine">Hair Care Routine</option>
          <option value="Mindfulness Routine">Mindfulness Routine</option>
          <option value="Skincare Routine">Skincare Routine</option>
          <option value="Workout Routine">Workout Routine</option>
          <option value="Sleep Hygiene Routine">Sleep Hygiene Routine</option>
          <option value="Healthy Eating Routine">Healthy Eating Routine</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-800 mb-2">
          Duration (in weeks):
        </label>
        <input
          type="number"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
          placeholder="e.g., 4"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Milestones</h3>
        {milestones.map((milestone, index) => (
          <div key={index} className="flex items-center gap-3 mb-2">
            <input
              type="text"
              className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              placeholder={`Milestone ${index + 1}`}
              value={milestone}
              onChange={(e) => updateMilestone(index, e.target.value)}
            />
            <button
              className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
              onClick={() =>
                setMilestones(milestones.filter((_, i) => i !== index))
              }
            >
              Remove
            </button>
          </div>
        ))}
        <button
          className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          onClick={addMilestone}
        >
          Add Milestone
        </button>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Steps</h3>
        {steps.map((step, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-200 rounded-lg bg-white">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Step Description:
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 mb-2"
              placeholder="What should be done?"
              value={step.description}
              onChange={(e) =>
                updateStep(index, "description", e.target.value)
              }
            />
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product (Optional):
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 mb-2"
              placeholder="Any product or tool?"
              value={step.product}
              onChange={(e) => updateStep(index, "product", e.target.value)}
            />
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tip (Optional):
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
              placeholder="Helpful tip"
              value={step.tip}
              onChange={(e) => updateStep(index, "tip", e.target.value)}
            />
          </div>
        ))}
        <button
          className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          onClick={addStep}
        >
          Add Step
        </button>
      </div>

      <div className="flex justify-center items-center">
      <button
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
        onClick={saveRoutine}
      >
        Save Routine
      </button>
      </div>
    </div>
  );
};

export default RoutineBuilder;

