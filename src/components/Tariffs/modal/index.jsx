import React, { useState } from "react";
import { Button, Modal } from "antd";
import { ModalForm } from "./styled-index";
import "./styles.css"

function TarifModal({ isModalOpen, handleOk, handleCancel }) {
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ModalForm>
          <h2>Ariza qoldirish</h2>
          <p>
            "BO’TALOG’IM" tarifida oʻqish uchun maʼlumotlaringizni qoldiring va
            menejerlarimiz tez orada siz bilan bogʻlanadi!
          </p>

          <form>
            <input type="text" placeholder="ism , familiya" />
            <input type="number" placeholder="+998" />
            <button>Yubarish</button>
          </form>
          <p>
            Tugmani bosish orqali siz shaxsiy maʼlumotlaringizni saqlash va
            qayta ishlashga rozilik bildirasiz
          </p>
        </ModalForm>
      </Modal>
    </>
  );
}

export default TarifModal;
