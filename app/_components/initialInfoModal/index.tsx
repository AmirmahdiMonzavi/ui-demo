import { useTranslations } from "next-intl";

import { DispatchSetIsOpenType } from "@/_types/modal";

import EditModal from "../modals/editModal";

type Sample = {
  qustion: string;
  answer: string;
};

const SAMPLE_LIST = [
  {
    qustion: "",
    answer:
      "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.",
  },
  {
    qustion: "Do we use cookies and other tracking technologies?",
    answer:
      "Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.",
  },
  {
    qustion: "How long do we keep your information?",
    answer:
      "Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.",
  },
  {
    qustion: "How do we keep your information safe?",
    answer:
      "Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.",
  },
  {
    qustion: "What are your privacy rights?",
    answer:
      "Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.",
  },
  {
    qustion: "What are your privacy rights?",
    answer:
      "Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.",
  },
];

const InitialInfoModal = ({
  list = SAMPLE_LIST,
  title,
  modalType,
  setIsOpen,
}: {
  list?: Sample[];
  title?: string;
  modalType: string;
  setIsOpen: DispatchSetIsOpenType;
}) => {
  const t = useTranslations();

  return (
    <EditModal
      title={title}
      setIsOpen={setIsOpen}
      contentExtraClassName="max-h-96 overflow-y-auto"
      footerButtons={[
        {
          title: t("ok_lets_go"),
          onClick: () => {
            setIsOpen(false);
            localStorage.setItem(modalType, "false");
          },
        },
      ]}
      footerType="vertical"
    >
      <div className="flex flex-col gap-6">
        {list.map(({ qustion, answer }, index) => {
          return (
            <div className="flex flex-col gap-3" key={index}>
              <h2 className="text-lg text-secondary-10">{qustion}</h2>
              <p className="text-base text-secondary-07">{answer}</p>
            </div>
          );
        })}
      </div>
    </EditModal>
  );
};

export default InitialInfoModal;
