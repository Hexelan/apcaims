import React from "react";
import { motion } from "framer-motion";

export default function Form3({
  agent,
  stepIndex,
  agentParams,
  handleChange,
  handlePrev,
  handleSubmit,
}) {
  const styleHide = "hide";
  const styleShow = "show";
  return (
    <motion.div
      className={`sect step2 ${stepIndex === 2 ? styleShow : styleHide}`}
      initial={{ x: "-100vw", opacity: 0.1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.7, delay: 1, type: "tween" }}
    >
      <form action="#" className="form">
        <h2>Step 3</h2>
        <div className="input_box">
          <label htmlFor="form-category">Agent Type</label>
          <select
            name="agentType"
            id="form-category"
            value={agent.agentType}
            defaultValue={agentParams.agentTypes[0]}
            onChange={handleChange}
          >
            {agentParams.agentTypes.map((_val, index) => {
              return (
                <option value={_val} key={index}>
                  {`${_val} AGENTS`}
                </option>
              );
            })}
          </select>
        </div>

        <div className="input_box">
          <label htmlFor="form-bank" className="label">
            BANK
          </label>
          <select
            name="bankName"
            id="form-bank"
            value={agent.bankName}
            defaultValue={agentParams.bankNames[0]}
            onChange={handleChange}
          >
            {agentParams.bankNames.map((_val, index) => {
              return (
                <option value={_val} key={index}>
                  {_val}
                </option>
              );
            })}
          </select>
        </div>

        <div className="input_box">
          <label htmlFor="form-account-number" className="label">
            Account Number
          </label>
          <input
            type="text"
            rows="1"
            id="form-account-number"
            value={agent.accountNumber}
            placeholder="e.g 2091234567"
            name="accountNumber"
            // value={ques.category}
            onChange={handleChange}
          />
        </div>

        <div className="input_box">
          <label htmlFor="form-image">Profile Image</label>
          <input
            type="file"
            id="form-image"
            name="image"
            value={agent.image}
            onChange={handleChange}
            accept="image/*"
          />
        </div>
      </form>
      <div className="btnContainer">
        <div className=" buttons">
          <input
            type="submit"
            value="Go Back"
            onClick={handlePrev}
            className="btn"
          />
        </div>
        <div className="buttons">
          <input
            type="submit"
            value="Submit"
            onClick={handleSubmit}
            className="btn"
          />
        </div>
      </div>
    </motion.div>
  );
}
