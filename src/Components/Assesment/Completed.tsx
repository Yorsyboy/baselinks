import React, { useState } from "react";
import { Link } from "react-router-dom";

function Completed() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-2xl mx-auto">
        <div>
          <h1>Baselink Academy Assessment</h1>
          <table className="w-full table-auto mt-2">
            <tbody>
              <tr>
                <td className="p-2">Points:</td>
                <td className="p-2">80/100</td>
              </tr>
              <tr>
                <td className="p-2">Percentage</td>
                <td className="p-2">80%</td>
              </tr>
              <tr>
                <td className="p-2">Duration</td>
                <td className="p-2">00:11:00</td>
              </tr>
              <tr>
                <td className="p-2">Date Started:</td>
                <td className="p-2">Fri 20 Aug ‘24 08:20</td>
              </tr>
              <tr>
                <td className="p-2">Date Started:</td>
                <td className="p-2">Fri 20 Aug ‘24 08:31</td>
              </tr>
            </tbody>
          </table>
          <div className="bg-[#F6F6F6] border border-l-2 border-l-[#4CAF50] p-3 m-5">
            <h2>Feedback</h2>
            <p>
              Fantastic job on the assessment! Your score of 80% demonstrates a
              strong understanding of the material and showcases your commitment
              to learning.
            </p>
          </div>
        </div>
        <div className="flex justify-end">
            <Link to="/user/assessments" className="bg-[#4CAF50] text-white px-4 py-2 rounded-md">Back to Assessment</Link>
          </div>
      </div>
    </div>
  );
}

export default Completed;
