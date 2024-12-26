import React, { useContext } from "react";
import { RoutineContext } from "../context/RoutineContext";

const SavedRoutines = () => {
  const { savedRoutines, deleteRoutine } = useContext(RoutineContext);

  return (
    <div className="mt-10 p-6 h-screen max-w-6xl mx-auto bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-indigo-800 mb-8 text-center">
        Your Saved Routines
      </h2>
      {savedRoutines.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-600 text-lg">
            No routines saved yet. Start building one today!
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-gray-300 mx-auto mt-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h11M9 21v-6m0 0L5 11m4 4l4-4m5-2h1m0 0a1 1 0 011 1v6a1 1 0 01-1 1h-3m4-9V9a2 2 0 00-2-2h-3m-1 2h-1m-4 0H7m4 0H5m4 0h.01M6 7v-.01M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z"
            />
          </svg>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedRoutines.map((routine, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {routine.name}
                </h3>
                <button
                  onClick={() => deleteRoutine(index)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
                  aria-label="Delete routine"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 mb-3">
                <strong>Duration:</strong> {routine.duration} weeks
              </p>
              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Milestones:
              </h4>
              <ul className="list-disc list-inside text-gray-600 mb-3">
                {routine.milestones.map((milestone, i) => (
                  <li key={i}>{milestone}</li>
                ))}
              </ul>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Steps:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {routine.steps.map((step, i) => (
                  <li key={i} className="mb-1">
                    <span className="font-semibold">{step.description}</span>
                    {step.product && (
                      <span className="text-gray-500"> - {step.product}</span>
                    )}
                    {step.tip && (
                      <span className="text-indigo-500 italic"> - {step.tip}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedRoutines;
