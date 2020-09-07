import React, { useState, useCallback, useEffect } from 'react';
import { GoRepo } from 'react-icons/go';

import {
  Container,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from './styles';

const options = [
  'RafaelLeveske/react-blog',
  'RafaelLeveske/react-blog-server',
  'RafaelLeveske/react-mobile',
];

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [searchResults, setSearchResults] = React.useState([] as any);

  useEffect(() => {
    const results = options.filter(option =>
      option.toLowerCase().includes(selectedOption),
    );
    setSearchResults(results);
  }, [selectedOption]);

  const handleInputFocus = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleInputChange = useCallback(e => {
    setSelectedOption(e.target.value);
  }, []);

  return (
    <Container>
      <DropDownHeader
        type="text"
        value={selectedOption}
        placeholder="Search or jump to..."
        onClick={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
      />
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {searchResults.map((item: string) => (
              <ListItem>
                <GoRepo size={15} />
                {item}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </Container>
  );
};

export default Dropdown;
