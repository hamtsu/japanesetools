import { FC } from "react";
import { FaCog, FaExclamationCircle } from "react-icons/fa";
import Button from "./Button";
import { FaAngleDown, FaXmark } from "react-icons/fa6";
import Dropdown from "./Dropdown";
import Divider from "./Divider";
import MultiSelect from "./MultiSelect";

type AdjectiveSettingsProps = {
  closeSettings: () => void;
  badSettings: boolean;
  onOptionChange: (option: string, value: boolean) => void;
  defaultOptions: {
    "い-adjectives": boolean;
    "な-adjectives": boolean;
    past: boolean;
    present: boolean;
    negative: boolean;
    affirmative: boolean;
  };
};

const AdjectiveSettings: FC<AdjectiveSettingsProps> = ({
  closeSettings,
  badSettings,
  onOptionChange,
  defaultOptions,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        <div className="flex gap-4 items-center w-fit dark:text-slate-100 bg-slate-200 dark:bg-neutral-800 p-4 rounded-md animate-fade-in antialiased">
          <FaCog className="animate-fade-in-late opacity-70" size={30} />
          <h1 className="text-4xl font-bold">Adjective settings</h1>
        </div>

        <Button
          type="secret-error"
          onClick={() => closeSettings()}
          className="h-fit w-fit flex items-center"
        >
          <FaXmark size={30} />
        </Button>

        {badSettings && (
          <div className="rounded-md bg-red-500 text-neutral-200 h-fit px-2 py-1 max-w-[400px]">
            <h1 className="font-bold flex items-center gap-1">
              <FaExclamationCircle /> Settings Invalid
            </h1>
            <p className="text-sm">
              Adjectives of only present tense and affirmative assertion are
              invalid. Please select another <b>tense</b> or <b>assertion</b>.
            </p>
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <div className="flex flex-col gap-2 h-fit dark:text-slate-100 bg-slate-200 dark:bg-neutral-800 p-4 rounded-md animate-fade-in-late antialiased">
          <div>
            <h3 className="text-2xl font-bold">Presets</h3>
            <p className="text-lg opacity-50">pick a preset of options below</p>
          </div>

          {/* TODO finish presets */}
          <Dropdown
            items={[
              {
                name: "Te-Form only",
                callback: () => console.log("test"),
              },
              {
                name: "All but Te-Form",
                callback: () => console.log("test"),
              },
            ]}
          >
            <Button type="secondary" className="flex items-center gap-1">
              Presets <FaAngleDown />
            </Button>
          </Dropdown>
        </div>

        <div className="flex w-96 flex-col gap-2 dark:text-slate-100 bg-slate-200 dark:bg-neutral-800 p-4 rounded-md animate-fade-in-late antialiased">
          <div>
            <h3 className="text-2xl font-bold">Adjective assertion</h3>
            <p className="text-lg opacity-50">
              pick either affirmative or negative or both
            </p>
          </div>
          <MultiSelect
            items={[
              {
                name: "Affirmative",
                defaultOn: defaultOptions.affirmative,
              },
              { name: "Negative", defaultOn: defaultOptions.negative },
            ]}
            handleToggleItem={(name, toggle) =>
              onOptionChange(name.toLowerCase(), toggle)
            }
          />
          <Divider className="my-2" />

          <div>
            <h3 className="text-2xl font-bold">Adjective type</h3>
            <p className="text-lg opacity-50">
              pick the type of adjectives to practice
            </p>
          </div>
          <MultiSelect
            items={[
              {
                name: "い-adjectives",
                defaultOn: defaultOptions["い-adjectives"],
              },
              {
                name: "な-adjectives",
                defaultOn: defaultOptions["な-adjectives"],
              },
            ]}
            handleToggleItem={(name, toggle) =>
              onOptionChange(name.toLowerCase(), toggle)
            }
          />
          <Divider className="my-2" />

          <div>
            <h3 className="text-2xl font-bold">Adjective tense</h3>
            <p className="text-lg opacity-50">
              pick the tense of adjectives to practice
            </p>
          </div>
          <MultiSelect
            items={[
              { name: "Past", defaultOn: defaultOptions.past },
              { name: "Present", defaultOn: defaultOptions.present },
            ]}
            handleToggleItem={(name, toggle) =>
              onOptionChange(name.toLowerCase(), toggle)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AdjectiveSettings;
